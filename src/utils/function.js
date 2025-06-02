export const getBgUrl = (background) => {
    return new URL(`../assets/background/${background}`,import.meta.url).href;
}

export const getIconUrl = (icons) => {
    return new URL(`../assets/icons/${icons}`,import.meta.url).href;
}

// export const getImageUrl = (images) => {
//     return new URL(`../assets/images/${images}`,import.meta.url).href;
// }

export const getImageUrl = (image) => `/images/${image}`;

export const getVideoUrl = (video) => {
    return new URL(`../assets/video/${video}`,import.meta.url).href;
}

