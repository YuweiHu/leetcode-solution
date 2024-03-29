// 88ms >88.19%
var mergeTrees = function(t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;

    const result = new TreeNode(t1.val + t2.val);
    result.left = mergeTrees(t1.left, t2.left);
    result.right = mergeTrees(t1.right, t2.right);
    return result;
};