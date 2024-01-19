import { useEffect } from 'react';
import { useState } from 'react';

export const useOnceEffect = (callback = () => {}) => {
	const [executed, setExecuted] = useState(false);

	useEffect(() => {
		if (executed) return;
		if (!callback()) return;
		setExecuted(true)
	}, [executed, callback])
}