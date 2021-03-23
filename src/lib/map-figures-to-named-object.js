export default function mapFiguresToNamedObject(figures) {
  return figures?.reduce((obj, figure) => ({
    ...obj,
    [figure?.name]: figure?.childImageSharp?.fluid
  }), {})
}
