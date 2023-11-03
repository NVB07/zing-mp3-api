async function reSearch(query) {
    try {
        const response = await fetch(`/api/search?&query=${query}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Lỗi khi gọi API:", response.status, response.statusText);
            return { ERROR: 'Please open "DEV TOOL" check error ! ' };
        }
    } catch (error) {
        console.error(error);
        return { ERROR: 'Please open "DEV TOOL" check error ! ' };
    }
}

export default reSearch;
