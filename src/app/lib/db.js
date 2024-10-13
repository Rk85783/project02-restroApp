const { mongodb_username, mongodb_password } = process.env;
export const connectionStr ="mongodb+srv://"+mongodb_username+":"+mongodb_password+"@cluster0.als4t.mongodb.net/restroDB?retryWrites=true&w=majority&appName=Cluster0";
