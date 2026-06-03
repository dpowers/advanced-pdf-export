## fix bottom text in rendered pdf getting cut/halfed(preview is fine)

## fix auto break logic
PASS "    # Python comment" -> false
PASS "# Real heading" -> true
FAIL "## Real H2" -> false
PASS "### H3" -> false
PASS "\t# tabbed comment" -> false
