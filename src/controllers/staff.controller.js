const Staff = require("../models/staff.model");
const remove = async (req, res) => {
  try {
    const { staffId } = req.params;
    const [result] = await Staff.deleteById(staffId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  remove,
};
