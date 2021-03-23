export default attachments => attachments?.reduce((obj, attachment) => ({
  ...obj,
  [attachment?.name]: attachment?.publicURL
}), {})
