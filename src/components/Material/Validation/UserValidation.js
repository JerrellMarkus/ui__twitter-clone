import * as yup from 'yup';

const userSchema = yup.object().shape({
    Username:   yup.string().required(),
    Password:   yup.string().min(4).required()
});