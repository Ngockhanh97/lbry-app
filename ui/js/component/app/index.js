import React from "react";
import { connect } from "react-redux";

import { selectCurrentModal } from "selectors/app";
import {
  doCheckUpgradeAvailable,
  doAlertError,
  doCheckDaemonVersion,
} from "actions/app";
import { doUpdateBalance } from "actions/wallet";
import App from "./view";

const select = state => ({
  modal: selectCurrentModal(state),
});

const perform = dispatch => ({
  alertError: errorList => dispatch(doAlertError(errorList)),
  checkUpgradeAvailable: () => dispatch(doCheckUpgradeAvailable()),
  checkDaemonVersion: () => dispatch(doCheckDaemonVersion()),
  updateBalance: balance => dispatch(doUpdateBalance(balance)),
});

export default connect(select, perform)(App);
