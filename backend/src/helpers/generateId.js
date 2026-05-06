const generateId = () => {
    return Date.toString() + Math.random().toString(32).substring(2);
}

export default generateId;