//import bcrypt from 'bcryptjs';
import { Item } from '../models/item.model.js';

export const getAllItems = async (req, res, next) => {
    try {
        const resp = await crud.getAllItems(Item);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};
