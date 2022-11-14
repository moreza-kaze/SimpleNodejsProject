export default function (req, res, next) {
  res.status(404).json({
    message: "404 not found",
    data: {},
  });
}
