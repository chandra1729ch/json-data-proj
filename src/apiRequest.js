const apiRequest = async (url = "", headers = null, errorMsg=null) => {
    try {
        const response = await fetch(url, headers);
        if(!response.ok) throw Error("Data fetch failed");
    } catch (error) {
        errorMsg = error.message;
    } finally {
        return errorMsg;
    }
}
export default apiRequest;