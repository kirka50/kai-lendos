type config = {
    BASE_URL: string;
}

export default <config>{
    BASE_URL: process.env.NUXT_PUBLIC_BASE_URL || '/',
}