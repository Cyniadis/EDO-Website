export enum HomeContainerColor
{
    Red, Blue
};

export enum HomeContainerAlignement
{
    Left, Right
};

export class HomeContainer 
{
    mainColor: HomeContainerColor;
    alignement: HomeContainerAlignement;
    title: string;
    paragraph: string;
    imageParagraph: string;
    buttonText: string;
    images : string[];
};