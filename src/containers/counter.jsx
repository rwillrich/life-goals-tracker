import { connect } from 'react-redux'

import { decrement, increment } from '../actions/counter'
import Counter from '../components/counter'

const mapStateToProps = ({ counter }) => ({ counter })
const mapDispatchToProps = { decrement, increment }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
