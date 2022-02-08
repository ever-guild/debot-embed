import store from '/src/store';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { CONFIRM_INPUT_ID } from '/src/constants/debot';
import CONFIRM_INPUT_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams } from '../../../types';

class ConfirmInput extends BaseInterface {
	static id = CONFIRM_INPUT_ID;

	constructor() {
		super(CONFIRM_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const stageObject = {
			text: prompt,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.CONFIRM_INPUT,
			interfaceAddress: interfaceIdToAddress(ConfirmInput.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default ConfirmInput;
