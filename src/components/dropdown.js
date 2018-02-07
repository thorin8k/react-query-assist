import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Section,
  Suggestions,
  Suggestion,
  Helper,
  KeyOutline,
  Link
} from './dropdown.styl'

export default class extends PureComponent {
  static propTypes = { // eslint-disable-line
    value: PropTypes.string,
    attributes: PropTypes.array,
    onSelect: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number
  }

  constructor (props) {
    super(props)
    this.keydown = this.keydown.bind(this)
    this.handleEnterKey = this.handleEnterKey.bind(this)
    this.handleEscKey = this.handleEscKey.bind(this)
    this.handleArrowKeys = this.handleArrowKeys.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.filterSuggestions = this.filterSuggestions.bind(this)
    this.acceptSuggestion = this.acceptSuggestion.bind(this)
    this.state = {
      suggestions: [],
      highlightedIdx: 0,
      selectedIdx: null
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keydown, false)

    this.setState({
      suggestions: this.getSuggestions()
    })
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keydown, false)
  }

  componentWillReceiveProps (nextProps) {
    const {
      value
    } = nextProps

    if (this.props.value !== value) {
      this.setState({
        suggestions: this.filterSuggestions(value),
        // reset selector to top each time value changes
        highlightedIdx: 0
      })
    }
  }

  componentDidUpdate () {
    if (this.state.suggestions.length === 0) {
      this.props.onClose()
    }
  }

  keydown (evt) {
    switch (evt.keyCode) {
      case 9: // tab key
      case 13: // enter key
        this.handleEnterKey(evt)
        break
      case 27: // esc key
        this.handleEscKey(evt)
        break
      case 38: // up key
      case 40: // down key
        this.handleArrowKeys(evt, evt.keyCode)
        break
    }
  }

  handleEnterKey (evt) {
    evt.preventDefault()
    this.acceptSuggestion()
  }

  handleEscKey (evt) {
    evt.preventDefault()
    this.props.onClose()
  }

  handleArrowKeys (evt, keyCode) {
    evt.preventDefault()

    const { highlightedIdx } = this.state
    const isDownKey = keyCode === 40

    // the furthest down it can go before wrapping
    const max = this.state.suggestions.length - 1

    // determine the next position
    const newIdx = highlightedIdx !== null
      ? isDownKey ? highlightedIdx + 1 : highlightedIdx - 1
      : isDownKey ? 0 : max

    this.setState({
      // make sure it doesn't go out of bounds by resetting to opposite side
      highlightedIdx: isDownKey
        ? newIdx <= max ? newIdx : 0
        : newIdx >= 0 ? newIdx : max
    })
  }

  getSuggestions () {
    const { attributes } = this.props
    const { selectedIdx } = this.state

    return selectedIdx !== null && selectedIdx > -1
      ? attributes[selectedIdx].enumerations
      : attributes.map(({ name }) => name)
  }

  acceptSuggestion () {
    const idx = this.state.highlightedIdx
    const suggestion = this.state.suggestions[idx]
    const append = ' '

    this.props.onSelect(`${suggestion}${append}`)
  }

  filterSuggestions (value) {
    return this.getSuggestions()
      .filter(v => new RegExp(escape(value), 'i').test(v))
  }

  render () {
    const style = {
      left: `${this.props.offsetX || 0}px`,
      top: `${this.props.offsetY || 0}px`
    }

    return (
      <Container
        tabIndex='0'
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        style={style}>
        <Suggestions>
          {this.state.suggestions.map((suggestion, key) =>
            <Suggestion
              key={key}
              active={this.state.highlightedIdx === key}
              onClick={this.acceptSuggestion}
              onMouseOver={() => this.setState({ highlightedIdx: key })}>
              {suggestion}
            </Suggestion>)}
        </Suggestions>

        <Section center>
          <Helper>
            <KeyOutline>▲</KeyOutline>
            <KeyOutline>▼</KeyOutline>
            to navigate
          </Helper>

          <Helper>
            <KeyOutline long>↵</KeyOutline>
            to select
          </Helper>
        </Section>

        <Section center>
          <Link
            target='_blank'
            href='https://timber.io/docs/app/console/searching'>
            Learn more
          </Link>
        </Section>
      </Container>
    )
  }
}
