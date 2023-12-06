class Register {
    public Size: number;
    public Value: number;

    public static Init(Size: number = 8, Value: number = 0): Register {
        return {
            Size,
            Value
        };
    }
}

export default Register;