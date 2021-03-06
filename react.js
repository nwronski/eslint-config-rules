module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    commonjs: true,
    'jest/globals': true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
    'jest'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx'
      ]
    },
    react: {
      version: 'detect',
      linkComponents: [
        {
          name: 'Link',
          linkAttribute: 'to'
        }
      ]
    }
  },
  rules: {
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has|toggle)[A-Z]([A-Za-z0-9]?)+'
      }
    ],
    'react/button-has-type': 'error',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true
      }
    ],
    'react/forbid-component-props': [
      'error',
      {
        forbid: [
          'style'
        ]
      }
    ],
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          {
            element: 'button',
            message: 'use <Button> instead'
          }
        ]
      }
    ],
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true
      }
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-boolean-value': [
      'error',
      'never'
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'after-props',
        selfClosing: 'after-props'
      }
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        attributes: true,
        children: true,
        allowMultiline: true,
        spacing: {
          objectLiterals: 'never'
        }
      }
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never'
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.tsx',
          '.jsx'
        ]
      }
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop'
    ],
    'react/jsx-fragments': [
      'error',
      'syntax'
    ],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: false
      }
    ],
    'react/jsx-indent-props': [
      'error',
      4
    ],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline'
      }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowFunctions: false,
        allowBind: false,
        allowArrowFunctions: true,
        ignoreDOMComponents: false
      }
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child'
      }
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true
      }
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        'return': 'parens-new-line',
        arrow: 'parens',
        condition: 'parens',
        logical: 'ignore',
        prop: 'ignore'
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'off',
    'react/no-multi-comp': [
      'warn',
      {
        ignoreStateless: true
      }
    ],
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': [
      'error',
      {
        noTemplateLiterals: true
      }
    ],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true
      }
    ],
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false
      }
    ],
    'react/state-in-constructor': [
      'warn',
      'never'
    ],
    'react/static-property-placement': [
      'error',
      'static public field'
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: [
          'noHref',
          'invalidHref'
        ]
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': [
      'warn',
      {
        ignoreNonDOM: true
      }
    ],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',

    'jest/valid-expect': [
      'warn',
      {
        alwaysAwait: true,
        minArgs: 1,
        maxArgs: 1,
      },
    ],
  }
};
