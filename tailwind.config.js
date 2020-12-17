module.exports = {
    purge: ['./src/**/*.tsx', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Poppins', 'system-ui', 'sans-serif'],
            body: ['Poppins', 'system-ui', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '8rem',
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
};
