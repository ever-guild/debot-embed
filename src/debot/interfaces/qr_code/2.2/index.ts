import store from '/src/store';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { QR_CODE_ID } from '/src/constants/debot';
import QR_CODE_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams,  } from '../../../types';

class QrCode extends BaseInterface {
	static id = QR_CODE_ID;

	constructor() {
		super(QR_CODE_ABI);
	}

	scan(params: TExtendedDebotInterfaceParams) {
		const { answerId } = params.value;

		const stageObject = {
			functionId: answerId,
			component: COMPONENTS_BINDINGS.QR_CODE.SCAN,
			interfaceAddress: interfaceIdToAddress(QrCode.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default QrCode;
