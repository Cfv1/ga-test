import {useEffect} from 'react';
import {usePrevious} from './usePrevious';
import {ICommunication} from 'src/models/common/ICommunication';
import useSnackbar from 'src/components/common/Snackbar/useSnackbar';

export function useErrorCommunication(communication: ICommunication) {
  const prevCommunication = usePrevious<ICommunication>(communication);

  const {setSnack} = useSnackbar();

  useEffect(() => {
    if (prevCommunication?.isRequesting && !communication.isRequesting && !!communication.error) {
      setTimeout(() => setSnack({message: communication.error!, open: true}), 0);
    }
  }, [setSnack, prevCommunication?.isRequesting, communication.isRequesting, communication.error]);
}
