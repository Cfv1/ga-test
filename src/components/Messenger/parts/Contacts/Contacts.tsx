import React, {memo} from 'react';
import {Box, Tab, Tabs} from '@mui/material';
import AddContactSection from './AddContactSection/AddContactSection';
import Contact from './Contact/Contact';
import {IContact} from 'src/models/IContact';
import {CONTACTS_CONTAINER, CONTACTS_ROOT} from './styles';

interface IContactsProps {
  data: IContact[];
  onSelect(index: number): void;
  currentContactIndex?: number;
}

const Contacts = (props: IContactsProps) => {
  const {onSelect, data, currentContactIndex} = props;

  return (
    <Box width="30%" sx={CONTACTS_ROOT}>
      {data.length > 0 && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={currentContactIndex}
          onChange={(event, value) => onSelect(value)}
          sx={CONTACTS_CONTAINER}
          TabIndicatorProps={{style: {backgroundColor: "transparent"}}}
        >
          {data.map((contact, index) => (
            <Tab key={contact.id} sx={{padding: 0}} label={
              <Contact key={contact.id} isActive={currentContactIndex === index} data={contact}/>
            }/>
          ))}
        </Tabs>
      )}
      <AddContactSection mode={data.length === 0 ? 'simple' : 'small'} />
    </Box>
  )
}

export default memo(Contacts)