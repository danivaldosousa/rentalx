import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase{

    constructor(private specificationRepository: ISpecificationsRepository){}

    async execute({ description, name}: IRequest): Promise<void> {

        const specificationAlredyExists = await this.specificationRepository.findByName(name);

        if(specificationAlredyExists){
            throw new Error("Specification already exists");
        }
        
        await this.specificationRepository.create({
            description, 
            name,
        });
    }

}

export { CreateSpecificationUseCase };