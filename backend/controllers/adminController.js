export const getAdminDashboard = (req, res) => {
  res.json({
    message: `Welcome Admin ${req.admin.username}`,
    adminId: req.admin._id,
  });
};
