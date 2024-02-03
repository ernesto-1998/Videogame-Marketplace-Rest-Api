export const entitieKeys = {
    user: ['email', 'password', 'user_role_id'],
    profile: [
        'name',
        'lastname',
        'date_birth',
        'profile_pic',
        'contact_email',
        'contact_number',
    ],
    address: ['country', 'state', 'street', 'zip_code'],
    console: [
        'console_dict_id',
        'is_used',
        'is_sold',
        'price',
        'image',
        'description',
    ],
    videogame: [
        'console_dict_id',
        'name',
        'is_used',
        'is_sold',
        'price',
        'image',
        'description',
        'genders',
    ],
    periferic: [
        'console_dict_id',
        'name',
        'is_used',
        'is_sold',
        'price',
        'image',
        'description',
    ],
    videogame_gender: ['videogame_id', 'gender_id'],
}

export default entitieKeys
