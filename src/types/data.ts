export interface PanelProps {
	width: number
	height: number
	visible: boolean
}

export interface LabelProps {
	caption: string
	visible: boolean
}

export interface ButtonProps {
	caption: string
	width: number
	height: number
	visible: boolean
}

export type ContentItem =
	| { type: 'panel'; props: PanelProps; content?: ContentItem[] }
	| {
			type: 'label'
			props: LabelProps
	  }
	| {
			type: 'button'
			props: ButtonProps
	  }
