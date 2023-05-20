import {usePrevious} from './usePrevious';
import {ICommunication} from 'src/models/common/ICommunication';

export function useSuccessCommunication(communication: ICommunication, onSuccess: () => void) {
  const prevCommunication = usePrevious<ICommunication>(communication);

  if (prevCommunication?.isRequesting && !communication.isRequesting && communication.isSuccess) {
    setTimeout(() => onSuccess(), 0);
  }
}
