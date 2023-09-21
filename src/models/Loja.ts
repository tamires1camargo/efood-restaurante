class Loja {
  title: string
  grade: string
  category: string
  description: string
  image: string
  id: number

  constructor(
    title: string,
    grade: string,
    category: string,
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.grade = grade
    this.category = category
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Loja
