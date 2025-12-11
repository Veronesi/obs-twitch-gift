import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
	const [reply, setReply] = useState<string | null>(null);
	const [asyncReply, setAsyncReply] = useState<string | null>(null);

	const sendPing = async () => {
		const api = (window as any).electronAPI;
		if (!api || !api.invoke) {
			setReply('electronAPI.invoke not available');
			return;
		}
		try {
			const res = await api.invoke('ipc-ping', 'hello from renderer');
			setReply(res?.reply ?? JSON.stringify(res));
		} catch (e) {
			setReply('error: ' + String(e));
		}
	};

	const sendPingAsync = () => {
		const api = (window as any).electronAPI;
		if (!api || !api.send) {
			setAsyncReply('electronAPI.send not available');
			return;
		}
		api.send('ipc-ping-async', 'hello-async');
	};

	useEffect(() => {
		const api = (window as any).electronAPI;
		if (!api || !api.on) return;
		const handler = (msg: string) => setAsyncReply(msg);
		api.on('ipc-pong-async', handler);
		return () => {
			// no explicit removal (ipcRenderer.removeListener) since bridge doesn't expose it
		};
	}, []);

	return (
		<div style={{ padding: 20 }}>
			<h2>Electron + React IPC Ping</h2>
			<div style={{ marginTop: 12 }}>
				<button onClick={sendPing}>Ping (invoke)</button>
				<div>Reply: {reply ?? '-'}</div>
			</div>
			<div style={{ marginTop: 12 }}>
				<button onClick={sendPingAsync}>Ping (async send)</button>
				<div>Async Reply: {asyncReply ?? '-'}</div>
			</div>
		</div>
	);
}

const root = createRoot(document.body);
root.render(<App />);
