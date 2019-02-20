import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.context)
        return (
            <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px", marginBottom: "0" }}>
              Select a language:{" "}
            </p>
            <i
              className="flag us"
              onClick={() => this.context.onLanguageChange("english")}
            />
            <i
              className="flag nl"
              onClick={() => this.context.onLanguageChange("dutch")}
            />
          </div>
        )
    }
}

export default LanguageSelector