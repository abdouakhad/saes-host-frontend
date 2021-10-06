module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                info_yellow: "#FFD230",
                master_blue: "#01BDFE",
                'jaune':'#FFD230',
                'bleu':'#01BDFE',
                'my_gray' : '#3c3c3c'
            },
            width: {
                '600': '600px'
            }
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'focus'],
            borderRadius: ['hover', 'focus'],
            borderWidth: ['hover', 'focus'],
            transitionDuration: ['hover', 'focus'],
            fontSize: ['hover', 'focus'],
            zIndex: ['hover'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};