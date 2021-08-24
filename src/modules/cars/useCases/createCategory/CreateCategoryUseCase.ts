import { ICategoriesRepository } from "../../repositories/ICategoriesRepositoy";

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){};
    
    execute({name, description}: IRequest) : void {
       
        const AlreadyExists = this.categoriesRepository.findByName(name);

        if(AlreadyExists) {
            throw new Error("Category with that name already exists.");
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase };