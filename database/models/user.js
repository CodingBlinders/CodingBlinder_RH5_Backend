const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: true,
            enum: ['USER', 'ADMIN'],
            default: 'USER'
        },
        heartDisease: {
            RFHYPE5: String,
            TOLDHI2: String,
            CHOLCHK: String,
            BMI5: String,
            SMOKE100: String,
            CVDSTRK3: String,
            DIABETE3: String,
            TOTINDA: String,
            FRTLT1: String,
            VEGLT1: String,
            RFDRHV5: String,
            HLTHPLN1: String,
            MEDCOST: String,
            GENHLTH: String,
            MENTHLTH: String,
            PHYSHLTH: String,
            DIFFWALK: String,
            SEX: String,
            AGEG5YR: String,
            EDUCA: String,
            INCOME2: String
        },
        diabetes: {
            Age: Number,
            Gender_Female: Boolean,
            Gender_Male: Boolean,
            Polyuria_No: Boolean,
            Polyuria_Yes: Boolean,
            Polydipsia_No: Boolean,
            Polydipsia_Yes: Boolean,
            'sudden weight loss_No': Boolean,
            'sudden weight loss_Yes': Boolean,
            weakness_No: Boolean,
            weakness_Yes: Boolean,
            Polyphagia_No: Boolean,
            Polyphagia_Yes: Boolean,
            Genital_thrush_No: Boolean,
            Genital_thrush_Yes: Boolean,
            visual_blurring_No: Boolean,
            visual_blurring_Yes: Boolean,
            Itching_No: Boolean,
            Itching_Yes: Boolean,
            Irritability_No: Boolean,
            Irritability_Yes: Boolean,
            delayed_healing_No: Boolean,
            delayed_healing_Yes: Boolean,
            partial_paresis_No: Boolean,
            partial_paresis_Yes: Boolean,
            muscle_stiffness_No: Boolean,
            muscle_stiffness_Yes: Boolean,
            Alopecia_No: Boolean,
            Alopecia_Yes: Boolean,
            Obesity_No: Boolean,
            Obesity_Yes: Boolean
        }
    },
    { timestamps: true }
);

const User = mongoose.model('users', userSchema);
module.exports = User;
