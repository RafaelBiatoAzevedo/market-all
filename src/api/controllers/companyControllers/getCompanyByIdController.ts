module.exports = (req: any, res: any) => {
  const { params } = req.params;

  if (params) return res.status(200).json({ result: params });

  return res.status(404).json({ message: 'not found' });
};
