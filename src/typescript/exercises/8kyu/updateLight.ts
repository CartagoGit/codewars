export const updateLight = (current: string): string => {
    const lights = ["green", "yellow", "red"] as const;
    const index = lights.indexOf(current as (typeof lights)[number]);
	return lights[(index + 1) % lights.length];
};
