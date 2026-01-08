"use client";

import React, { useState, useEffect } from "react";

// Types
interface RippleType {
	x: number;
	y: number;
	size: number;
}

/**
 * A material design ripple effect component.
 * To use this, the parent container must have `relative` and `overflow-hidden`.
 */
export const Ripple = () => {
	const [ripples, setRipples] = useState<RippleType[]>([]);

	useEffect(() => {
		let bounce: NodeJS.Timeout | null = null;
		if (ripples.length > 0) {
			bounce = setTimeout(() => {
				setRipples([]);
			}, 600);
		}
		return () => {
			if (bounce) clearTimeout(bounce);
		};
	}, [ripples.length]);

	const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
		const container = event.currentTarget.getBoundingClientRect();
		const size =
			container.width > container.height ? container.width : container.height;
		const x = event.clientX - container.left - size / 2;
		const y = event.clientY - container.top - size / 2;
		const newRipple = { x, y, size };

		setRipples((prev) => [...prev, newRipple]);
	};

	return (
		<div
			className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
			onMouseDown={addRipple}
		>
			{ripples.map((ripple, index) => {
				return (
					<span
						key={index}
						className="absolute animate-ripple rounded-full bg-white opacity-25"
						style={{
							top: ripple.y,
							left: ripple.x,
							width: ripple.size,
							height: ripple.size,
							transform: "scale(0)",
						}}
					/>
				);
			})}
		</div>
	);
};
