export function passwordValidator(password) {
  if (!password) return "Le mot de passe ne peut pas être vide."
  if (password.length < 5) return 'Le mot de passe doit comporter au moins 5 caractères.'
  return ''
}
