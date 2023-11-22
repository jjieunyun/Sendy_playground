interface ApiResponse {
    data: any;
}

export default async function apiClientHandler(fn: Promise<ApiResponse>) :Promise<any> {
    try {
        const res = await fn;
        return res.data.data;
    }
    catch (error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                alert('토큰이 존재하지 않습니다.');
                location.href = '/';
                return;
            } else {
                const errorMessage = error.response.data?.error || error.response.error || '오류가 발생했습니다!!';
                alert(errorMessage);
                return;
            }
        } else {
            alert(`Error: ${error.message}`);
            return;
        }
    }
}