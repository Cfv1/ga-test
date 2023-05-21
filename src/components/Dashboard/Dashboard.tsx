import React, {memo} from 'react';

import BaseLayout from 'src/components/BaseLayout/BaseLayout';
import Messenger from 'src/components/Messenger/Messenger';

const Dashboard = () => {
  return (
    <BaseLayout>
      <Messenger />
    </BaseLayout>
  )
}

export default memo(Dashboard);