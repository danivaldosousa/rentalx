import { inject, injectable } from "tsyringe"

import { ICategoriesRepository } from "../../repositories/ICategoriesRepositoy";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){};
    
   async execute({name, description}: IRequest) : Promise<void> {
       
        const AlreadyExists = await this.categoriesRepository.findByName(name);

        if(AlreadyExists) {
            throw new Error("Category with that name already exists.");
        }

        await this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase };