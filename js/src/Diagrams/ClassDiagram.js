/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');
  var _controller = new mxCell('Controller', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');


  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;
  _controller.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [

    sb.addEntry(dt + 'object instance', function()
		{
			var cell = new mxCell('Classname', new mxGeometry(0, 0, 160, 90),
		    	'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;');
			cell.vertex = true;
			cell.insert(field.clone());
			cell.insert(divider.clone());
			cell.insert(sb.cloneCell(field, '+ method(type): type'));
			
			return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class'); 
		}),

    sb.addEntry(dt + 'object instance', function()
		{
		    var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>&lt;&lt;Interface&gt;&gt;</i><br/><b>Interface</b></p>' +
					'<hr size="1"/><p style="margin:0px;margin-left:4px;">+ field1: Type<br/>' +
					'+ field2: Type</p>' +
					'<hr size="1"/><p style="margin:0px;margin-left:4px;">' +
					'+ method1(Type): Type<br/>' +
					'+ method2(Type, Type): Type</p>', new mxGeometry(0, 0, 190, 140),
					'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
		    cell.vertex = true;
			
			return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Interface ');
		}),

    sb.addEntry('uml association', function()
		{
			var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;html=1;edgeStyle=orthogonalEdgeStyle;dashed=0;');
			edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
			edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
			edge.geometry.relative = true;
			edge.edge = true;
			
	    	var cell1 = new mxCell('parent', new mxGeometry(-1, 0, 0, 0), 'resizable=0;html=1;align=left;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=10;');
	    	cell1.geometry.relative = true;
	    	cell1.setConnectable(false);
	    	cell1.vertex = true;
	    	edge.insert(cell1);
			
	    	var cell2 = new mxCell('child', new mxGeometry(1, 0, 0, 0), 'resizable=0;html=1;align=right;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=10;');
	    	cell2.geometry.relative = true;
	    	cell2.setConnectable(false);
	    	cell2.vertex = true;
	    	edge.insert(cell2);
	    	
			return sb.createEdgeTemplateFromCells([edge], 160, 0, 'Association ');
		}),

    sb.createEdgeTemplateEntry('endArrow=diamondThin;endFill=0;endSize=24;html=1;dashed=0;', 160, 0, '', 'Aggregation ', null, 'aggregation'),
    sb.createEdgeTemplateEntry('endArrow=diamondThin;endFill=1;endSize=24;html=1;dashed=0;', 160, 0, '', 'Composition ', null, 'composition'),
    sb.createEdgeTemplateEntry('endArrow=open;endSize=12;dashed=1;html=1;', 160, 0, '', 'Dependency', null, 'uml dependency use'),
    sb.createEdgeTemplateEntry('endArrow=block;endSize=16;endFill=0;html=1;dashed=0;', 160, 0, '', 'Herencia', null, 'uml generalization extend'),

    

   

    
    
    
    


    

    
  ];
  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
};

module.exports = addClassDiagramPalette;