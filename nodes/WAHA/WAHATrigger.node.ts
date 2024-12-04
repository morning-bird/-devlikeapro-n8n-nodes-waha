import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { BASE_TRIGGER_DESCRIPTION } from "./base/trigger";
import { WAHATriggerV202411 } from "./v202411/WAHATriggerV202411";

export class WAHATrigger extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			...BASE_TRIGGER_DESCRIPTION,
			defaultVersion: 202411,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			202411: new WAHATriggerV202411(),
		};

		super(nodeVersions, baseDescription);
	}
}
