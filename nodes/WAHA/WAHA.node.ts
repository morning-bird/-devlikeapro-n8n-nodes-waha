import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { WAHAv202411 } from './v202411/WAHAv202411';
import { BASE_DESCRIPTION } from "./base/node";

export class WAHA extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			...BASE_DESCRIPTION,
			defaultVersion: 202411,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			202411: new WAHAv202411(),
		};

		super(nodeVersions, baseDescription);
	}
}
