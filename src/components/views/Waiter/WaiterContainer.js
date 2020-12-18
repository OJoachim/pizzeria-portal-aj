import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateTableStatusRequest } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTableStatus: (tableId, newStatus) => dispatch(updateTableStatusRequest(tableId, newStatus)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);