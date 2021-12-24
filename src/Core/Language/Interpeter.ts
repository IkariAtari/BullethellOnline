import { Block } from "./Block/Block";
import { StartBlock } from "./Block/StartBlock";
import { IRunnable } from "./Block/IRunnable";
import { Statement } from "./Statement/Statement";
import { Type } from "../../../node_modules/typescript/lib/typescript";

export class Interperter
{
    private Tokens: Array<string>;

    private KeyWords: Array<IRunnable> = [
        new StartBlock(),
    ];

    /*private BlockWords: Array<string> =s
        [s
            'action'
        ]

    private StatementWords: Array<string> =
        [
            'print',
            'spawn',
            'shoot',
            'health',
            'spawnat',
            'move'
        ]

    private RootBlockWords: Array<string> =
        [
            'bullet',
            'pattern',
            'enemy',
            'path',
            'level'
        ]*/

    private Variables: Array<any> = new Array<any>();

    private MasterBlocks: Array<Block> = new Array<Block>();

    public Interpet (_code: string): void
    {
        // generate all keywords from blocks and statements
        this.GenerateKeywords();

        //let test = new this.KeyWords[0];
        //let test2 = new test();


        // interpet file
        this.Tokens = _code.split(";");
        this.Tokens = _code.split(/\s+/);

        // make all code blocks
        this.MakeBlockList(this.Tokens)

        // this.BuildLevel();
    }

    private GenerateKeywords ()
    {
        
    }

    private ProcessBlock (_type: string, _code: Array<string>, isMasterBlock: boolean, referenceBlock: Block = undefined): void
    {
        let _block: Block

        // Set type
        /*switch (_type.toLowerCase())
        {
            case "start":
                _block = new StartBlock();
                break;
            case "action":
                _block = new ActionBlock();
                break;
            default:
                _block = new Block();
                break;
        }*/

        /*for (let i: number = 0; i < _code.length; i++)
        {
            if (this.StatementWords.includes(_code[i].toLowerCase()))
            {
                let _statement: Statement;
                _statement.ParentBlock = _block;

                switch (_code[i].toLowerCase())
                {
                    case "print":
                        _statement = new PrintStatement();

                        _statement.Arguments.push(_code[i + 1]);
                        break;
                }

                _block.Commands.push(_statement);
            }
            else if (this.BlockWords.includes(_code[i].toLowerCase()))
            {
                let _newBlock: Array<string> = _code.slice(i);
                let _processedBlock: Array<string> = this.CreateBlock(_newBlock);

                this.ProcessBlock(_code[i], _processedBlock, false, _block);
            }
            else if (this.RootBlockWords.includes(_code[i].toLowerCase()))
            {
                // cannot make root block in block error
            }
            else
            {
                // throw invalid keyword error
            }
        }

        if (isMasterBlock)
        {
            this.MasterBlocks.push(_block)
        }
        else
        {
            if (referenceBlock != undefined)
            {
                referenceBlock.Commands.push(_block);
            }
        }*/
    }

    /*private CreateBlock (_code: Array<string>): Array<string>
    {
        let _backlog: number = 1;

        for (let i: number = 0; i < _code.length; i++)
        {
            // If it is a block
            if (this.BlockWords.includes(_code[i].toLowerCase()))
            {
                _backlog++;
            }
            else if (_code[i].toLowerCase() == "end")
            {
                _backlog--;

                if (_backlog == 0)
                {
                    let _blockCode: Array<string> = _code.slice(1, i);

                    if (_blockCode.length == 0)
                    {
                        _blockCode.push(" ");
                    }

                    return _blockCode;
                }
            }
        }
    }*/

    private MakeBlockList (_toProcess: Array<string>)
    {
        // Iterate to each token, this should handle master blocks
        /*for (let i: number = 0; i < _toProcess.length; i++)
        {
            // If it is a block
            if (this.RootBlockWords.includes(_toProcess[i]))
            {
                let _blockCode = _toProcess.slice(i, undefined)

                _blockCode = this.CreateBlock(_blockCode);

                this.ProcessBlock(_toProcess[i], _blockCode, true);
            }
        }*/

        console.log(this.MasterBlocks);
    }
}