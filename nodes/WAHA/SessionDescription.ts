import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

export const SessionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Session'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'List',
				action: 'List sessions',
				description: 'List all sessions',
				routing: {
					request: {
						method: 'GET',
						url: '/api/sessions',
					},
				},
			},
			{
				name: 'Get',
				action: 'Get a session',
				value: 'Get',
				description: 'Get a session',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/sessions/{{$parameter["sessionName"]}}',
					},
				},
			},
			{
				name: 'Create',
				action: 'Create a session',
				value: 'Create',
				description: 'Create a session',
				routing: {
					request: {
						method: 'POST',
						url: '/api/sessions',
						body: {
							name: '={{$parameter["sessionName"]}}',
							config: '={{JSON.parse($parameter["sessionConfig"])}}',
						},
					},
				},
			},
			{
				name: 'Update',
				action: 'Update a session',
				value: 'Update',
				description: 'Update a session',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/sessions/{{$parameter["sessionName"]}}',
						body: {
							config: '={{JSON.parse($parameter["sessionConfig"])}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				action: 'Delete a session',
				value: 'Delete',
				description: 'Delete a session',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/sessions/{{$parameter["sessionName"]}}',
					},
				},
			},
			{
				name: 'Start',
				action: 'Start a session',
				value: 'Start',
				description: 'Start a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/start',
					},
				},
			},
			{
				name: 'Stop',
				action: 'Stop a session',
				value: 'Stop',
				description: 'Stop a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/stop',
					},
				},
			},
			{
				name: 'Logout',
				action: 'Logout a session',
				value: 'Logout',
				description: 'Logout a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/logout',
					},
				},
			},
			{
				name: 'Restart',
				action: 'Restart a session',
				value: 'Restart',
				description: 'Restart a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/restart',
					},
				},
			},
		],
		default: 'List',
	},
];

const sessionConfigDefault = {
	metadata: {
		'user.id': '123',
	},
	debug: false,
	webhooks: [
		{
			url: 'https://webhook.site/',
			events: ['message', 'session.status'],
		},
	],
	noweb: {
		store: {
			enabled: true,
			fullSync: false,
		},
	},
};

export const SessionFields: INodeProperties[] = [
	{
		displayName: 'All Sessions',
		name: 'all',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['Session'],
				operation: ['List'],
			},
		},
		default: true,
		description:
			'Whether to return all sessions (including STOPPED) or only the ones that are active',
		routing: {
			request: {
				qs: {
					all: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Session Name',
		name: 'sessionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Session'],
				operation: ['Get', 'Create', 'Update', 'Delete', 'Start', 'Stop', 'Logout', 'Restart'],
			},
		},
		default: 'default',
	},
	{
		displayName: 'Session Config',
		name: 'sessionConfig',
		type: 'json',
		default: JSON.stringify(sessionConfigDefault, null, 2),
		displayOptions: {
			show: {
				resource: ['Session'],
				operation: ['Create', 'Update'],
			},
		},
	},
	{
		displayName: 'Start Session',
		name: 'Start',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['Session'],
				operation: ['Create'],
			},
		},
		default: true,
		description: 'Whether to start the session at creation',
		routing: {
			request: {
				body: {
					start: '={{ $value }}',
				},
			},
		},
	},
];
