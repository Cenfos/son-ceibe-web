export function GET(request: Request) {
  return Response.redirect(new URL("/albums/a-saber-o-que-ven-front.jpg", request.url), 308)
}
