export const isLowEndDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const deviceMemory = navigator.deviceMemory || 2;

    // Check user agent for older devices or browsers
    const isOldDevice =
        /android|mobile|iphone|ipad|ipod|opera mini|iemobile|windows phone|blackberry/.test(
            userAgent,
        );

    // Check hardware specs
    const isLowSpec = hardwareConcurrency <= 2 || deviceMemory <= 2;

    // Check network connection
    const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
    const effectiveType = connection ? connection.effectiveType : '';
    const isSlowNetwork = effectiveType === '2g' || effectiveType === '3g';

    return isLowSpec || isSlowNetwork || isOldDevice;
};

if (isLowEndDevice()) {
    console.log('Low-end device detected. Applying optimizations.');
}
