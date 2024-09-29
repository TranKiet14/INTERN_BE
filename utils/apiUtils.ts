const apiUtils = {
  getApiName: (originalUrl: string) => {
    // Tách chuỗi bằng dấu //
    const parts = originalUrl.split("/");
    if (parts[0] == "") {
      const result = parts[1];
      return result;
    }
    return null;
  },
};
export default apiUtils
