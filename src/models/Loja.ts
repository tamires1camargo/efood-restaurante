class Loja {
  title: string
  grade: string
  category: string
  description: string
  image: string
  id: number
  highlight: string

  constructor(
    title: string,
    grade: string,
    category: string,
    description: string,
    image: string,
    id: number,
    highlight: string
  ) {
    this.title = title
    this.grade = grade
    this.category = category
    this.description = description
    this.image = image
    this.id = id
    this.highlight = highlight
  }
}

export default Loja
