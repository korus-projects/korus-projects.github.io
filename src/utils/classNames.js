export function clsx(...classes) {
    return classes
        .flat()
        .filter(Boolean)
        .map(cls => {
            if (typeof cls === 'object' && cls !== null) {
                return Object.keys(cls)
                    .filter(key => cls[key])
                    .join(' ');
            }
            return cls;
        })
        .join(' ')
        .trim();
}

export const cn = clsx;

